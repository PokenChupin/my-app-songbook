import Songbar from "./Songbar"
import { AutoSizer, List, CellMeasurerCache, CellMeasurer, WindowScroller } from "react-virtualized";

export default function Songtable(props){
    
    const {
        songs
    } = {...props}

    const cache = new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 300
    });

    const songRenderer = ({ index, key, style, parent }) => {
        return (
          <CellMeasurer
            key={key}
            cache={cache}
            parent={parent}
            columnIndex={0}
            rowIndex={index}>
            {({measure,registerChild}) => (
                <Songbar 
                    measure={measure} 
                    ref={registerChild} 
                    key={key}
                    style={style}
                    song={{...songs[index]}}
                />
            )}
          </CellMeasurer>
        );
      }

    return (
        <div style={{ flex: '1 1 auto'}} class="w-full">
            <WindowScroller>
                {({
                    height,
                    isScrolling,
                    registerChild,
                    onChildScroll,
                    scrollTop
                }) => (
                    <div>
                        <AutoSizer disableHeight>
                            {({ width }) => (
                                <div ref={registerChild}>
                                    <List
                                        ref={el => {
                                            window.listEl = el;
                                        }}
                                        autoHeight
                                        height={height}
                                        isScrolling={isScrolling}
                                        onScroll={onChildScroll}
                                        overscanRowCount={3}
                                        rowCount={songs.length}
                                        rowHeight={cache.rowHeight}
                                        rowRenderer={songRenderer}
                                        scrollTop={scrollTop}
                                        width={width}
                                    />
                                </div>
                            )}
                        </AutoSizer>
                    </div>
                )}
            </WindowScroller>
        </div>
    )
}
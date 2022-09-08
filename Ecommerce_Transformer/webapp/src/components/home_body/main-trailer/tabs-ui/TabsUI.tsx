import { useRef, useEffect } from 'react';
import './TabsUI.scss';
import { pane, tab } from '../../../../assets/data/homeData'

const TabsUI = () => {
    const tabRef: any = useRef<any[]>([]);
    const paneRef: any = useRef<any[]>([]);
    const lineRef: any = useRef();

    useEffect(() => {
        tabRef.current[0].classList.add('active');
        paneRef.current[0].classList.add('active');
        lineRef.current.style.left = tabRef.current[0].offsetLeft + 'px';
        lineRef.current.style.width = tabRef.current[0].offsetWidth + 'px';
    }, []);

    const handleClick = (e: any) => {
        const currentIndex = tabRef.current.indexOf(e.target);
        for (let tab in tabRef.current) {
            tabRef.current[tab].classList.remove('active');
            paneRef.current[tab].classList.remove('active');
        }
        e.target.classList.add('active');
        paneRef.current[currentIndex].classList.add('active');
        lineRef.current.style.left = e.target.offsetLeft + 'px';
        lineRef.current.style.width = e.target.offsetWidth + 'px';
    };

    return (
        <div className="tabsUI">
            {/* Tab Items */}
            <div className="tabsUI__tabs">
                {tab.map((item: any) => (
                    <div
                        key={item}
                        ref={(ref) => tabRef.current.push(ref)}
                        className="item"
                        onClick={handleClick}
                    >
                        {item}
                    </div>
                ))}
                <div ref={lineRef} className="line"></div>
            </div>
            {/* Tab Content */}
            <div className="tabsUI__tabContent">
                {pane.map((item) => (
                    <div
                        key={item.tab}
                        className="pane"
                        ref={(ref) => paneRef.current.push(ref)}
                    >
                        <h2>{item.tab}</h2>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabsUI;

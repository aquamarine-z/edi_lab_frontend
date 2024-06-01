import styles from "./Home.module.less"

import {Carousel} from "antd";


export function Home() {
    const pictures = []
    for (let i = 0; i < 10; i++) {
        pictures.push(<div className={styles.picture}>111</div>)
    }
    return (<div className={styles.home}>

        <Carousel autoplay={true} autoplaySpeed={2000} arrows >
            <div className={styles.picture}>

                <img src={""} alt={""} className={styles.img}></img>
            </div>
            <div className={styles.picture}>
                <img src={""} alt={""} className={styles.img}></img>
            </div>
            <div className={styles.picture}>
                <img src={""} alt={""} className={styles.img}></img>
            </div>
            <div className={styles.picture}>
                <img src={""} alt={""} className={styles.img}></img>
            </div>

        </Carousel>
        <div className={styles.introduction}>
            <img className={styles.image} src={""} alt={""}></img>
            <div className={styles.column}>
                <h1>电赛成果</h1>
                <p>这里是介绍内容</p>
            </div>
        </div>
        <div className={styles.introduction}>
            <div className={styles.column}>
                <h1>仓储项目</h1>
                <p>这里是介绍内容</p>
            </div>
            <img className={styles.image} src={""} alt={""}></img>

        </div>
        <div className={styles.introduction}>
            <img className={styles.image} src={""} alt={""}></img>
            <div className={styles.column}>
                <h1>中科院软件所合作内容</h1>
                <p>这里是介绍内容</p>
            </div>
        </div>
    </div>)
}
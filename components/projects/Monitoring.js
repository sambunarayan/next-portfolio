import Style from '@/styles/aboutme.module.css';
import Image from 'next/image';
import MonitoringImg1 from '/public/images/jeus-blog-monitoring1.png';
import MonitoringImg2 from '/public/images/jeus-blog-monitoring2.png';

export default function Monitoring({ seqNum }) {
    switch (seqNum) {
        case "1":
            return (
                <>
                    <div className={Style.itemdiv}>
                        <div className="flex flex-col mb-2 lg:items-start items-center dark:text-slate-300">
                            <h3>Monitoring</h3>
                            <div className="project-sub text-left">
                                Prometheusでサーバーの情報を収集し、Grafanaで視覚化しました。<br />
                                トラフィックやサーバー負荷の推移を分析し、サーバーを改善していくことで、サービス運用を経験することが目標です。<br />
                                <br />
                                <b>Grafana Monitoring page</b>
                            </div>
                            <Image src={MonitoringImg1}
                                width={400}
                                height={200}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                quality="100" />
                            <Image src={MonitoringImg2}
                                width={400}
                                height={200}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                quality="100" />

                        </div>
                    </div>
                </>
            );
        default:
            return (<></>);
    }
}

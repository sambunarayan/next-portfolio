import Styles from '@/styles/aboutme.module.css';

export default function ServerSpec({ seqNum }) {
    switch (seqNum) {
        case "1":
            return (
                <div className={Styles.itemdiv}>
                    <div className="flex flex-col mb-2 lg:items-start items-center">
                        <h3>Server spec</h3>
                        <li>仮想環境：Virtual Box, Vagrant</li>
                        <li>Server：CentOS8 4台（Master node:1, Worker node:3）</li>
                        <li>Middleware：Kubernetes</li>
                        <li>DB：MariaDB</li>
                        <li>CI/CD：Jenkins</li>
                        <li>Monitoring：Prometheus, Grafana</li>
                        <li>Communication Tool：Slack</li>
                    </div>
                </div>
            );
    }
}
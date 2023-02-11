import Style from '@/styles/aboutme.module.css';
import Image from 'next/image';
import cicdImg from '/public/images/CI_CD.png';

export default function CiCd() {
    return (
        <>
            <div className={Style.itemdiv}>
                <div className="flex flex-col mb-2 lg:items-start items-center">
                    <h3>CI/CD</h3>
                    <div className="project-sub text-left">
                        Jenkinsを利用してビルドとデプロイを行います。<br />
                        JenkinsのKubernetes continuouse deploy pluginでGit hubを定期的に確認し、<br />
                        Git hubの新たなプッシュを検知したら自動的にビルドを開始しdocker imageを作成します。<br /><br />

                        作成されたdocker imageはdocker registryに登録されます。 <br />
                        その後、kubernetesのdeploymentが開始され、docker registryからdocker imageを取得してPodを作成します。<br />
                        尚、ビルド開始とデプロイ終了時にSlackに通知します。<br /><br />

                        ※Kubernetes deploymentは無停止デプロイを実現するためにblue-green戦略を採用しています。
                    </div>
                    <Image src={cicdImg}
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
}
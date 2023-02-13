import Style from '@/styles/aboutme.module.css';
import Image from 'next/image';
import cicdImg from '/public/images/CI_CD.png';
import JenkinsNoticeImg from '/public/images/jenkins-notice.png';

export default function CiCd({ seqNum }) {
    switch (seqNum) {
        case "1":
            return (
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
                        <div className="project-sub text-left"><br />
                            <b>①Push:</b>エンジニアがGit hubにプッシュします。<br />
                            <b>②Build & Docker image register:</b>Git hubから資産をプルし、ビルドを開始します。<br />
                            ビルドされたjarをもとにDocker imageを作成しprivate docker registryに登録します。<br />
                            <b>③Deployment:</b>モジュールのデプロイメントを定義したyamlをもとにデプロイを開始し、Kubernetes podを作成する。<br />
                            <b>④Notification(web hook):</b>デプロイが完了したらJenkinsからSlackに完了の通知をします。<br />
                            このときはSlackのWeb hookを利用します。<br />
                            <br />
                            <b>Jenkinsビルドが開始したときとビルドが完了したときにSlackに通知します。</b>
                        </div>
                        <Image src={JenkinsNoticeImg}
                            width={400}
                            height={200}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            quality="100" />
                    </div>
                </div>
            );
        default:
            return (<></>);
    }
}
import style from "./RepoComponent.module.css";

function Repo(props: any) {

    const { repoName, repoLanguage, repoUpdatedAt, repoCreatedAt } = props;
  
  return (
    <div className={style.repoContainerGeneral}>
      <div className={style.repoImageContainer}>
        <img src={""} className={style.repoImage}></img>
      </div>
      <div className={style.repoInfoContainer}>
        <div className={style.repoInfoTextContainer}>
          <span className={style.repoName}>{repoName}</span>
          <span className={style.repoLanguage}>{repoLanguage}</span>
          <span className={style.lastUpdate}>
            Last Update: {repoUpdatedAt}
          </span>
          <span className={style.repoAge}> Age: {repoCreatedAt}</span>
        </div>
      </div>
    </div>
  );
}

export default Repo;

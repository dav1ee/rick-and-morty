interface InfoProps {
  name: string;
  airDate: string;
}

export const Info: React.FC<InfoProps> = ({ name, airDate }) => {
  return (
    <div className="episode-info">
      <div className="episode-info__item">
        <div>{name}</div>
      </div>
      <div className="episode-info__item">
        <span className="episode-info__item-label">Air date:</span>
        <div>{airDate}</div>
      </div>
    </div>
  );
};

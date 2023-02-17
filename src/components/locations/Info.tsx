interface InfoProps {
  name: string;
  type: string;
  dimension: string;
}

export const Info: React.FC<InfoProps> = ({ name, type, dimension }) => {
  return (
    <div className="location-info">
      <div className="location-info__item">
        <div>{name}</div>
      </div>
      <div className="location-info__item">
        <span className="location-info__item-label">Type:</span>
        <div>{type}</div>
      </div>
      <div className="location-info__item">
        <span className="location-info__item-label">Dimension:</span>
        <div>{dimension}</div>
      </div>
    </div>
  );
};

interface StatusCircleProps {
  status: string;
}

export const StatusCircle: React.FC<StatusCircleProps> = ({ status }) => (
  <div
    className={`status-circle ${
      status === 'Alive'
        ? 'status-circle--alive'
        : status === 'Dead'
          ? 'status-circle--dead'
          : 'status-circle--unknown'
    }`}
  />
);

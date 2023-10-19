export default function DetailsContainer({ title, desc }) {
    return (
      <div className="w-50 pr-10">
        <p className="title">{title}</p>
        <p>{desc}</p>
      </div>
    );
  }
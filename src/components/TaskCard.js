export default function TaskCard({ task, onComplete }) {
    return (
      <div className="border rounded p-4 shadow-sm hover:shadow-md transition">
        <h2 className="text-lg font-semibold mb-1">{task.name}</h2>
        <p className="text-sm mb-1">
          Trader: <span className="font-medium">{task.trader.name}</span>
        </p>
        <div className="trader-info">
        <img src={task.trader.imageLink} alt={task.trader.name} width={50} height={50} />
        <span>{task.trader.name}</span>
      </div>
        <p className="text-sm mb-1">
          Min Level: <span>{task.minPlayerLevel ?? 'N/A'}</span>
        </p>
        <p className="text-sm">
          Kappa Required: <span>{task.kappaRequired ? 'Yes' : 'No'}</span>
        </p>
        {task.wikiLink && (
          <a
            href={task.wikiLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Wiki Link
          </a>
        )}
        <button
        onClick={onComplete}
        className="ml-4 px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"      >
        Complete
        </button>
      </div>
    );
  }
  
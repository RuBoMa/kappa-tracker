export default function TaskCard({ task, onComplete }) {
  return (
    <div className="border rounded p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-1">{task.name}</h2>

      <div className="trader-info flex items-center gap-2 mb-2">
        <img src={task.trader.imageLink} alt={task.trader.name} width={40} height={40} />
        <span className="text-sm font-medium">{task.trader.name}</span>
      </div>

      <p className="text-sm mb-1">
        Min Level: <span>{task.minPlayerLevel ?? "N/A"}</span>
      </p>
      <p className="text-sm mb-2">
        Kappa Required: <span>{task.kappaRequired ? "Yes" : "No"}</span>
      </p>

      {task.objectives?.length > 0 && (
        <div className="mb-3">
          <h3 className="text-sm font-semibold mb-1">Objectives:</h3>
          <ul className="space-y-2">
            {task.objectives.map((obj) => (
              <li key={obj.id} className="flex items-center gap-2">
                {obj.item?.image8xLink && (
                  <img
                    src={obj.item.image8xLink}
                    alt={obj.item.name}
                    width={32}
                    height={32}
                    className="rounded"
                  />
                )}
                <div>
                  <p className="text-sm">{obj.description}</p>
                  {obj.item?.name && (
                    <p className="text-xs text-gray-500">{obj.item.name}</p>
                  )}
                  {obj.optional && (
                    <p className="text-xs text-yellow-500">Optional</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {task.wikiLink && (
        <a
          href={task.wikiLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm block mt-2"
        >
          Wiki Link
        </a>
      )}

      <button
        onClick={onComplete}
        className="mt-4 px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Complete
      </button>
    </div>
  );
}

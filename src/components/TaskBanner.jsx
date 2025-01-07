export const TaskBanner = ({ taskItems }) => (
  <h4
    className="text-white text-center p-4 mb-1 fw-bold"
    style={{ background: "#303030" }}
  >
    JX Tasks App{" "}
    <span className="text-info">
      ({taskItems.filter((t) => !t.done).length} tasks to do)
    </span>
  </h4>
);

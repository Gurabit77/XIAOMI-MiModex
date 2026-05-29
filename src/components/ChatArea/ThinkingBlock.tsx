// ============================================================
// MiModex — ThinkingBlock (AI thinking process display)
// ============================================================
import { Collapse, Icon } from "animal-island-ui";

interface ThinkingBlockProps {
  thinking: string;
}

export function ThinkingBlock({ thinking }: ThinkingBlockProps) {
  const question = (
    <span className="thinking-question">
      <Icon name="icon-critterpedia" size={14} />
      <span>思考过程</span>
    </span>
  );

  return (
    <div className="thinking-block">
      <Collapse
        question={question}
        answer={
          <div className="thinking-content">{thinking}</div>
        }
      />
    </div>
  );
}

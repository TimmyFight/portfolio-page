import Image from "next/image";
import Headings from "../../Atoms/Headings/Headings";
import Typography from "../../Atoms/Typography/Typography";
import Chip from "../../Atoms/Chip/Chip";

interface HighlightedBoxProperties {
  title: string;
  title2?: string;
  title3?: string;
  description: string;
  asideText?: string;
  asideImage?: string;
  usedTechnologies?: string[];
}

const HighlightedBox = ({
  title,
  title2,
  title3,
  description,
  asideText,
  asideImage,
  usedTechnologies,
}: HighlightedBoxProperties) => {
  return (
    <section data-testid="highlightedBox" className="flex">
      <aside data-testid="asideSection">
        {asideText !== "" && (
          <Typography>
            <>{asideText}</>
          </Typography>
        )}
        {asideImage && asideImage !== "" && (
          <Image alt={title} src={asideImage} width={20} height={40} />
        )}
      </aside>
      <div data-testid="mainSection">
        <div>
          <Headings level={2}>
            <>{title}</>
          </Headings>
          {title2 !== "" && (
            <Headings level={3}>
              <>{title2}</>
            </Headings>
          )}
          {title3 !== "" && (
            <Headings level={4}>
              <>{title3}</>
            </Headings>
          )}
          <Typography>
            <>{description}</>
          </Typography>
        </div>
        {usedTechnologies &&
          usedTechnologies.map((technology: string) => (
            <Chip technology={technology} />
          ))}
      </div>
    </section>
  );
};

HighlightedBox.defaultProps = {
  title2: "",
  title3: "",
  asideText: "",
  asideImage: "",
  usedTechnologies: [],
};

export default HighlightedBox;
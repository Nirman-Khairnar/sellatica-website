interface BrandLoaderProps {
  exiting: boolean;
}

const BrandLoader = ({ exiting }: BrandLoaderProps) => {
  return (
    <div
      className={`brand-loader ${exiting ? 'brand-loader--exit' : ''}`}
      aria-hidden="true"
    >
      <div className="brand-loader__mark">
        <span className="brand-loader__name">Sellatica AI</span>
      </div>
    </div>
  );
};

export default BrandLoader;

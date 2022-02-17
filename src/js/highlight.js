const useBaseUrl = require('@docusaurus/useBaseUrl');


const ImgShow = ({ src, style, className }) => (
  <img src={useBaseUrl(src)} style={style} className={className} />
);

const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

exports.ImgShow = ImgShow;
exports.Highlight = Highlight;
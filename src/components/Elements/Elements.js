

export const Div = ({ className, reference, children, dataAos }) => (
    <div className={className} ref={reference} data-aos={dataAos}>{children}</div>
)

export const Button = ({ className, text, onClick }) => (
    <button
        type="button"
        className={className}
        onClick={onClick}
    >
        {text}
    </button>
)

export const Image = ({ id, src, className, width, alt, dataAos }) => (
    <img id={id} src={src} className={className} width={width} alt={alt} data-aos={dataAos} />
)

export const P = ({ className, dataAos, children }) => (
    <p className={className} data-aos={dataAos}>
        {children}
    </p>
)

export const A = ({ className, href, stayOnPage = false, text, onClick, children }) => (
    <a
        href={href}
        target={stayOnPage ? '' : '_blank'}
        className={className}
        onClick={onClick}
    >
        {children}
        {text}
    </a>
)

export const Span = ({ className, text, children }) => (
    <span className={className}>{text} {children}</span>
)

export const I = ({ className, children }) => (
    <i className={className}>{children}</i>
)

export const H1 = ({ id, className, children, dataAos }) => (
    <h1 id={id} className={className} data-aos={dataAos}>{children}</h1>
)

export const H2 = ({ id, className, children, dataAos }) => (
    <h2 id={id} className={className} data-aos={dataAos}>{children}</h2>
)

export const H3 = ({ id, className, children, dataAos }) => (
    <h3 id={id} className={className} data-aos={dataAos}>{children}</h3>
)

export const H4 = ({ id, className, children, dataAos }) => (
    <h4 id={id} className={className} data-aos={dataAos}>{children}</h4>
)

export const H5 = ({ id, className, children, dataAos }) => (
    <h5 id={id} className={className} data-aos={dataAos}>{children}</h5>
)

export const H6 = ({ id, className, children, dataAos }) => (
    <h6 id={id} className={className} data-aos={dataAos}>{children}</h6>
)

export const Ul = ({ dataAos, children }) => (
    <ul data-aos={dataAos}>{children}</ul>
)

export const Li = ({ className, children }) => (
    <li className={className}>
        {children}
    </li>
)

export const Footer = ({ className, dataAos, children }) => (
    <footer className={className} data-aos={dataAos} >{children}</footer>
)
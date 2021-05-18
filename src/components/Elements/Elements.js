import { children } from 'react'


export const Div = ({ className, reference, children }) => (
    <div className={className} ref={reference}>{children}</div>
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

export const Image = ({ src, className, width, alt }) => (
    <img src={src} className={className} width={width} alt={alt} />
)

export const P = ({ className, text, text2, children }) => (
    <p className={className}>
        {text}
        {children}
        {text2}
    </p>
)

export const A = ({ className, href, text, onClick, children }) => (
    <a
        href={href}
        target='_blank'
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

export const I = ({ className, text }) => (
    <i className={className}>{text}</i>
)

export const H1 = ({ id, className, text, dataAos }) => (
    <h1 id={id} className={className} data-aos={dataAos}>{text}</h1>
)

export const H2 = ({ id, className, text, dataAos }) => (
    <h2 id={id} className={className} data-aos={dataAos}>{text}</h2>
)

export const H3 = ({ id, className, text, dataAos }) => (
    <h3 id={id} className={className} data-aos={dataAos}>{text}</h3>
)

export const H4 = ({ id, className, text, dataAos }) => (
    <h4 id={id} className={className} data-aos={dataAos}>{text}</h4>
)

export const H5 = ({ id, className, text, dataAos }) => (
    <h5 id={id} className={className} data-aos={dataAos}>{text}</h5>
)

export const H6 = ({ id, className, text, dataAos }) => (
    <h6 id={id} className={className} data-aos={dataAos}>{text}</h6>
)

export const Ul = ({ children }) => (
    <ul>{children}</ul>
)

export const Li = ({ className, children, text }) => (
    <li className={className}>
        {text}
        {children}
    </li>
)

export const Footer = ({ className, dataAos, children }) => (
    <footer className={className} data-aos={dataAos} >{children}</footer>
)
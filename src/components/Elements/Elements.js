import { children } from 'react'


export const Div = ({ className, children }) => (
    <div className={className}>{children}</div>
)

export const Button = ({ className, text, action }) => (
    <button
        type="button"
        className={className}
        onClick={action}
    >
        {text}
    </button>
)

export const Image = ({ src, className, alt }) => (
    <img src={src} className={className} alt={alt} />
)

export const P = ({ className, text, text2, children }) => (
    <p className={className}>
        {text}
        {children}
        {text2}
    </p>
)

export const A = ({ className, href, text }) => (
    <a
        href={href}
        target='_blank'
        className={className}
    >{text}
    </a>
)

export const Span = ({ className, text }) => (
    <span className={className}>{text}</span>
)

export const H1 = ({ id, className, text, dataAos }) => (
    <h1 id={id} className={className} data-aos={dataAos}>{text}</h1>
)

export const H2 = ({ className, text }) => (
    <h2 className={className}>{text}</h2>
)

export const H3 = ({ className, text }) => (
    <h3 className={className}>{text}</h3>
)

export const H4 = ({ className, text }) => (
    <h4 className={className}>{text}</h4>
)

export const H5 = ({ className, text }) => (
    <h5 className={className}>{text}</h5>
)

export const Ul = ({ children }) => (
    <ul>{children}</ul>
)

export const Li = ({ children, text }) => (
    <li>
        {text}
        {children}
    </li>
)
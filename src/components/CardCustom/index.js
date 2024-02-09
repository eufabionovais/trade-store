import "./card-custom.scss";
const CardCustom = (props) => {
    const contentOnlyClass = (!props.header && !props.footer) ? 'content-only' : '';
    return (
        <div className={`custom-card ${contentOnlyClass}`}>
            {
                props.header &&
                <header className="custom-card__header">
                    {props.header}
                </header>
            }

            {
                props.content &&
                <div className="custom-card__section_group">
                    <div className="custom-card__section">
                        {props.content}
                    </div>
                </div>
            }

            {
                props.footer &&
                <footer className="custom-card__footer">
                    {props.footer}
                </footer>
            }


        </div>
    )
}

export default CardCustom;
import '../App.css';
const Contacts = () => (
    <div className="contacts-container">
        <h1 className="title-contacts">Контакты Акатцуки</h1>
        <div className="contact-info">
            <p className="description">
                Акатцуки — организация, которая скрывается в тени и выполняет опасные миссии. Для связи с лидером
                Акатцуки, Пейном, вам нужно будет проявить терпение и осторожность, так как он редко покидает
                Амегакуре, свою базу в Деревне Дождя.
            </p>

            <ul className="contact-list">
                <li>
                    <strong>Лидер:</strong> Пейн (Нагато)
                </li>
                <li>
                    <strong>Деревня:</strong> Амегакуре (Деревня Дождя)
                </li>
                <li>
                    <strong>Связь:</strong> Найдите его в Амегакуре, но будьте осторожны! Лидер не доверяет никому.
                </li>
            </ul>
        </div>

        <div className="contact-quote">
            <blockquote>
                <em>"Долгие и мрачные пути ведут к силе. Но они требуют преданности и решимости."</em>
                — Пейн (Нагато)
            </blockquote>
        </div>
    </div>
);

export default Contacts;

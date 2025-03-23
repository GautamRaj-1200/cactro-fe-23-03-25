import './logos.css';
import logos from '../../utils/constants';

const Logos = () => {
  return (
    <>
      <section className="logos">
        {logos.map((logo) => (
          <div key={logo.id} className="logo-item">
            <img src={logo.image} alt={logo.name} className="logo-image" />
          </div>
        ))}
      </section>
    </>
  );
};

export default Logos;

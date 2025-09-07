import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/paisaje-hero.jpeg';
import chevroletn400 from '../assets/chevrolet-n400.webp';
import kiapicanto from '../assets/kia-picanto.png';
import carPickup from '../assets/car-pickup.jpg';

const Index = () => {
  const navigate = useNavigate();

  const cars = [
    {
      id: 1,
      name: 'Chevrolet N400',
      image: chevroletn400,
      price: 85,
      features: ['8 Pasajeros', 'Aire Acondicionado', 'Mecanico'],
      fuel: 'Gasolina',
      transmission: 'Mecánico'
    },
    {
      id: 2,
      name: 'Kia Picanto',
      image: kiapicanto,
      price: 45,
      features: ['5 Pasajeros', 'Aire Acondicionado', 'Micanico'],
      fuel: 'Gasolina',
      transmission: 'Mecánico'
    },
    {
      id: 3,
      name: 'Pickup 4x4',
      image: carPickup,
      price: 75,
      features: ['5 Pasajeros', 'Aire Acondicionado', '4x4', 'Caja de Carga'],
      fuel: 'Gasolina',
      transmission: 'Manual/Automático'
    }
  ];

  return (
    <div style={{
      backgroundColor: '#0f172a',
      color: '#f1f5f9',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        borderBottom: '1px solid #334155',
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#3b82f6',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <img src="/rentacar/favicon.ico" alt="Logo" style={{ width: '32px', height: '32px', verticalAlign: 'middle' }} />
            RentCar Nicaragua
          </h1>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#autos" style={{
              color: '#cbd5e1',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Autos</a>
            <a href="#servicios" style={{
              color: '#cbd5e1',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Servicios</a>
            <a href="#contacto" style={{
              color: '#cbd5e1',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Contacto</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '700px',
          width: '100%',
          margin: '0 auto',
          padding: '2.5rem 2rem',
          background: 'none',
          borderRadius: '0',
          boxShadow: 'none',
          backdropFilter: 'none',
          border: 'none'
        }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            marginBottom: '1.2rem',
            color: '#f1f5f9',
            letterSpacing: '1px',
            textShadow: '0 2px 8px rgba(0,0,0,0.25)'
          }}>
            Alquiler de Autos en Nicaragua
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            color: '#cbd5e1',
            textShadow: '0 1px 4px rgba(0,0,0,0.18)'
          }}>
            Explora Nicaragua con nuestra variedad de vehículos.<br />
            Desde Managua hasta los departamentos, llevamos la aventura contigo.
          </p>
          <a href="#autos" style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '1rem 2.5rem',
            border: 'none',
            borderRadius: '0.75rem',
            fontSize: '1.15rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Ver vehículos
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" style={{
        padding: '4rem 2rem',
        backgroundColor: '#1e293b'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#f1f5f9'
          }}>
            Nuestros Servicios
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: '🛡️ Seguro full cover',
                description: 'Seguro full cover en todos nuestros vehículos.'
              },
              {
                title: '🕒 Disponible 24/7',
                description: 'Servicio de entrega y recogida las 24 horas del día.'
              },
              {
                title: '✈️ Entrega en aeropuerto',
                description: 'Recibe tu auto directamente en el Aeropuerto Internacional de Managua.'
              },
              {
                title: '🚨 Asistencia en carretera',
                description: 'Soporte y ayuda en caso de emergencias durante tu alquiler.'
              },
              {
                title: '💸 Descuento por varios días',
                description: 'Obtén tarifas especiales y descuentos por alquileres prolongados.'
              },
              {
                title: '🧑‍✈️ Alquiler con chofer',
                description: 'Opción de contratar un conductor profesional para tu viaje.'
              }
            ].map((service, index) => (
              <div key={index} style={{
                padding: '2rem',
                backgroundColor: '#334155',
                borderRadius: '1rem',
                textAlign: 'center',
                transition: 'transform 0.3s',
                cursor: 'pointer'
              }}>
                <h4 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#3b82f6'
                }}>
                  {service.title}
                </h4>
                <p style={{
                  color: '#cbd5e1',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo de Autos */}
      <section id="autos" style={{
        padding: '4rem 2rem',
        backgroundColor: '#0f172a'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#f1f5f9'
          }}>
            Nuestros Autos
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {cars.map((car) => (
              <div key={car.id} style={{
                backgroundColor: '#1e293b',
                borderRadius: '1rem',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}>
                <img 
                  src={car.image} 
                  alt={car.name}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#f1f5f9'
                    }}>
                      {car.name}
                    </h4>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#3b82f6'
                    }}>
                      ${car.price}/día
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {car.features.map((feature, index) => (
                      <span key={index} style={{
                        backgroundColor: '#334155',
                        color: '#cbd5e1',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.875rem'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.875rem',
                    color: '#94a3b8',
                    marginBottom: '1rem'
                  }}>
                    <span>Combustible: {car.fuel}</span>
                    <span>Transmisión: {car.transmission}</span>
                  </div>
                  <button 
                    onClick={() => navigate('/alquilar', { state: { car } })}
                    style={{
                    width: '100%',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '0.75rem',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}>
                    Alquilar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" style={{
        padding: '4rem 2rem',
        backgroundColor: '#1e293b'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#f1f5f9'
          }}>
            Contáctanos
          </h3>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2rem',
            color: '#cbd5e1'
          }}>
            ¿Listo para tu próxima aventura? Estamos aquí para ayudarte.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#334155',
              borderRadius: '1rem'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
                color: '#3b82f6'
              }}>
                📞 Teléfono
              </h4>
              <p style={{ color: '#cbd5e1' }}>+505 8400-2358</p>
            </div>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#334155',
              borderRadius: '1rem'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
                color: '#3b82f6'
              }}>
                📧 Email
              </h4>
              <p style={{ color: '#cbd5e1' }}>montesyalfred0@gmail.com</p>
            </div>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#334155',
              borderRadius: '1rem'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
                color: '#3b82f6'
              }}>
                📍 Ubicación
              </h4>
              <p style={{ color: '#cbd5e1' }}>Managua, Nicaragua</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Index;
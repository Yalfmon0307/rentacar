import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Alquilar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car } = location.state || {};
  
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    fechaInicio: null,
    fechaFin: null
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calcularDias = () => {
    if (formData.fechaInicio && formData.fechaFin) {
      const diferencia = Math.ceil((formData.fechaFin - formData.fechaInicio) / (1000 * 60 * 60 * 24));
      return diferencia > 0 ? diferencia : 0;
    }
    return 0;
  };

  const calcularTotal = () => {
    const dias = calcularDias();
    return dias * (car?.price || 0);
  };

  const enviarWhatsApp = () => {
    const dias = calcularDias();
    const total = calcularTotal();
    
    const mensaje = `*SOLICITUD DE ALQUILER*\n\n` +
      `🚗 *Vehículo:* ${car.name}\n` +
      `👤 *Nombre:* ${formData.nombre}\n` +
      `🆔 *Cédula:* ${formData.cedula}\n` +
      `📅 *Fecha inicio:* ${format(formData.fechaInicio, 'dd/MM/yyyy')}\n` +
      `📅 *Fecha fin:* ${format(formData.fechaFin, 'dd/MM/yyyy')}\n` +
      `⏱️ *Días:* ${dias}\n` +
      `💰 *Total:* $${total}\n\n` +
      `¡Gracias por elegir RentCar Nicaragua!`;

    // TODO: Reemplazar con el número real de WhatsApp
    const numeroWhatsApp = "50584002358"; // Número de ejemplo
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.cedula || !formData.fechaInicio || !formData.fechaFin) {
      alert('Por favor complete todos los campos');
      return;
    }

    if (formData.fechaFin <= formData.fechaInicio) {
      alert('La fecha de fin debe ser posterior a la fecha de inicio');
      return;
    }

    enviarWhatsApp();
  };

  if (!car) {
    return (
      <div style={{
        backgroundColor: '#0f172a',
        color: '#f1f5f9',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            No se encontró información del vehículo
          </h2>
          <Button onClick={() => navigate('/')}>
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#0f172a',
      color: '#f1f5f9',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '2rem',
          gap: '1rem'
        }}>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            Alquilar Vehículo
          </h1>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr'
          }
        }}>
          {/* Información del vehículo */}
          <Card>
            <CardHeader>
              <CardTitle>Vehículo Seleccionado</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={car.image} 
                alt={car.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {car.name}
              </h3>
              <p style={{ fontSize: '1.5rem', color: '#3b82f6', fontWeight: 'bold', marginBottom: '1rem' }}>
                ${car.price}/día
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
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
            </CardContent>
          </Card>

          {/* Formulario */}
          <Card>
            <CardHeader>
              <CardTitle>Datos del Alquiler</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <Label htmlFor="nombre">Nombre Completo</Label>
                  <Input
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                    placeholder="Ingrese su nombre completo"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="cedula">Cédula de Identidad</Label>
                  <Input
                    id="cedula"
                    type="text"
                    value={formData.cedula}
                    onChange={(e) => handleInputChange('cedula', e.target.value)}
                    placeholder="000-000000-0000X"
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <Label>Fecha de Inicio</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.fechaInicio && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.fechaInicio ? format(formData.fechaInicio, "dd/MM/yyyy") : "Seleccionar fecha"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.fechaInicio}
                          onSelect={(date) => handleInputChange('fechaInicio', date)}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label>Fecha de Fin</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.fechaFin && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.fechaFin ? format(formData.fechaFin, "dd/MM/yyyy") : "Seleccionar fecha"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.fechaFin}
                          onSelect={(date) => handleInputChange('fechaFin', date)}
                          disabled={(date) => date < new Date() || (formData.fechaInicio && date <= formData.fechaInicio)}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {formData.fechaInicio && formData.fechaFin && (
                  <div style={{
                    backgroundColor: '#1e293b',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #334155'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span>Días de alquiler:</span>
                      <span style={{ fontWeight: 'bold' }}>{calcularDias()}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span>Precio por día:</span>
                      <span>${car.price}</span>
                    </div>
                    <hr style={{ border: '1px solid #334155', margin: '0.5rem 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.125rem', fontWeight: 'bold' }}>
                      <span>Total:</span>
                      <span style={{ color: '#3b82f6' }}>${calcularTotal()}</span>
                    </div>
                  </div>
                )}

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full"
                  style={{ marginTop: '1rem' }}
                >
                  Enviar Solicitud por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Alquilar;
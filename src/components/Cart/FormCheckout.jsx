import { useState } from "react";

const FormCheckout = ({ handleChekout }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Z][a-zA-Z]{4,}$/;
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

    const trimmedName = nombre.trim();
    const trimmedEmail = email.trim();

    if (!nameRegex.test(trimmedName)) {
      alert(
        "El nombre debe comenzar con mayúscula y tener al menos 5 caracteres."
      );
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      alert("Por favor, ingrese un email válido.");
      return;
    }
    const formData = { name: trimmedName, email: trimmedEmail };
    setEmail("");
    setNombre("");

    console.log("Formulario enviado con éxito:", trimmedName, trimmedEmail);
    handleChekout(formData);
  };

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
      }}
    >
      <h4>Completa tus datos para efectuar tu compra</h4>
      <form onSubmit={handleSubmit} style={{ padding: 10 }}>
        <label>
          Nombre
          <input
            name="nombre"
            value={nombre}
            type="text"
            placeholder="Nombre"
            style={{ margin: 5 }}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            value={email}
            type="email"
            placeholder="email@.com"
            style={{ margin: 5 }}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="btn btn-info m-2">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default FormCheckout;

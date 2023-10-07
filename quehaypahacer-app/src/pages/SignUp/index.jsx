import { Layout } from '../../components/Layout'
import { Button, FormContainer, FormControl } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const emailPattern = /^[a-zA-Z]+[a-zA-Z0-9_\.]*@[a-zA-Z0-9]+\.[a-zA-Z]+/i

  export const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmitSignUp = data => {
      console.log('form', data)
    }

    return (
      <Layout>
        <h2>Formulario de registro</h2>
        <hr />
        <FormContainer>
          <form onSubmit= {handleSubmit(onSubmitSignUp)}noValidate>
            <FormControl>
              <label>Nombres</label>
              <input type="text" {...register("nombres")}/>
            </FormControl>

            <FormControl>
              <label>Apellidos</label>
              <input type="text" {...register("apellidos")}/>
            </FormControl>

            <FormControl>
              <label>Correo Electrónico</label>
              <input type="email" {...register("email", {required: true, pattern: emailPattern})}/>
              {errors.email?.type === 'required' && <span>Correo requerido</span>}
              {errors.email?.type === 'pattern' && <span>Correo no válido</span>}
            </FormControl>

            <FormControl>
              <label>Contraseña</label>
              <input type="password" {...register("password",{required: true, minLength: 4})} />
              {errors.password?.type === 'required' && <span>Contraseña requerida</span>}
              {errors.password?.type === 'minLength' && <span>Mínimo 4 caractéres</span>}
            </FormControl>

            <FormControl>
              <label>Validar Contraseña</label>
              <input type="password" {...register("Password",{required: true, minLength: 4})} />
              {errors.password?.type === 'required' && <span>Vuelve a ingresar tu contraseña</span>}
              {errors.password?.type === 'minLength' && <span>Mínimo 4 caractéres</span>}
            </FormControl>

            <FormControl>
              <label>Número de contacto</label>
              <input type="number" {...register("number", {required: true, minLength:10})}/>
              {errors.number?.type === 'required' && <span>Número celular requerido</span>}
              {errors.number?.type === 'minLength' && <span>Ingresa un número ceular válido</span>}
              {errors.number?.type === 'pattern' && <span>Número no válido</span>}
            </FormControl>

            <Button type="submit">Enviar Formulario</Button>

          </form>
        </FormContainer>

        <p>¿Ya estás registrado? <Link to={'/login'}>Inicia Sesión</Link></p>

      </Layout>
    )
  }

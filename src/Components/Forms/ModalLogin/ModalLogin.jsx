






const ModalLogin = () => {
    return (
        <div className="bg-dark bg-opacity-75">
            <div className="modal show d-block" tabIndex="-1" id="loginModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <button type="button" className="btn-close ms-auto mb-2" aria-label="Cerrar" data-bs-dismiss="modal"></button>
                        <h1 className="fw-bold mb-2">Inicio de sesión</h1>
                        <p className="mb-4">Inicia sesión con tu cuenta <strong>Eclosión.</strong></p>
                        <form>
                            <div className="mb-3">
                                <label for="email" className="fw-bold">Email</label>
                                <input type="email" className="form-control border border-secondary" id="email" name="email" required autocomplete="username" />
                            </div>
                            <div className="mb-4">
                                <label for="password" class="fw-bold">Contraseña</label>
                                <input type="password" className="form-control border border-secondary" id="password" name="password" required autocomplete="current-password" />
                            </div>
                            <div className="d-flex gap-2">
                                <button type="button" className="btn btn-success fw-bold btn-extra">Cancelar</button>
                                <button type="submit" className="btn btn-secondary w-100 fw-bold">Iniciar sesión</button>
                            </div>
                            <p className="mt-4 text-center register-link">¿No tienes una cuenta? <a href="registration.html">Registrate.</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalLogin;
import React from 'react'

function Modal() {
    const { setIsValidToken, setUserData, showMenu, setShowMenu } =
    useContext(DataContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsValidToken(false)
    setUserData({})
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (  
    <div className="menu-cmp">
      <div className="theme-switch">
        <ThemeSwitch />
      </div>
      <div className="menu-header" onClick={() => setShowMenu(!showMenu)}>
        <img src={src} alt="Profile picture"
          height={32} width={32} />
        <span>{username}</span>
        <DeployMenu />
      </div>
      {showMenu && <div className="menu-items-wrapper">
        <button title="En proceso de imlementación">
          <Profile />
          Mi Perfil
        </button>
        <button title="En proceso de imlementación">
          <Chat />
          Chat
        </button>
        <div className="line"></div>
        <button onClick={handleLogout}>
          <Logout />
          Cerrar sesión
        </button>
      </div>}
    </div>
  )
}

export default Modal
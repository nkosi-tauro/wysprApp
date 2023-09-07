
export default function Navbar() {

  const logout=()=>{
    localStorage.removeItem("signUp")
    window.location.reload()
  }

  const deleteAccount=()=>{
    localStorage.clear()
    window.location.reload()
  }


  return (
    <>
      <header className="absolute inset-x-0 top-0">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button onClick={deleteAccount}  className="text-sm font-semibold leading-6 text-red-500">
              Delete Account <span aria-hidden="true">❌</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button onClick={logout} className="text-sm font-semibold leading-6 text-white">
              Log Out <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}
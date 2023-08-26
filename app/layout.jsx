import '@styles/globals.css';

export const metadata = {
    title: "Portfolio",
    description: "Portfolio"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body className="bg-gray-700">
            <div className='root'>
            </div>
            
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
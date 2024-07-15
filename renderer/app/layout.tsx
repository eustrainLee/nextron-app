export default ({children}: Readonly<{
    children: React.ReactNode;
}>)=>{
    return (
    <html lang="en">
            <body>
                <a href="/home">go back home</a>
            {children}
        </body>
    </html>
    )
}
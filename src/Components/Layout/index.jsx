function Layout({ children }) {
    return (
        <div className='flex flex-col mt-20 p-5 items-center'>
            { children }
        </div>
    )
}

export { Layout }
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <PageTitle title='404'></PageTitle>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <LazyLoadImage className='w-96 h-64' src="https://i.ibb.co/JRC6swq/404.jpg" alt="" />
                <div className='max-w-md text-center'>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='flex justify-center px-8 py-3 font-semibold rounded'
                    >
                        <button className='btn-kidzplay'>Back to homepage</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage;
//import React from 'react'

function Hero() {
  return (
    <section className="p-6 dark:text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2">
			<span className="block text-2xl text-pink-600 mb-2 dark:text-violet-400">Dajana&rsquo;s Online Library</span>
			<h1 className="text-5xl font-extrabold dark:text-gray-50">Welcome to my online library</h1>
			<p className="my-8">
				<span className="text-lg font-medium dark:text-gray-50">Choose what books you like from this library and buy them today.</span>
			</p>
			
		</div>
		<img src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>
  )
}

export default Hero
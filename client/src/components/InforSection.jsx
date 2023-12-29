import React from 'react'

const InforSection = () => {
	return (
		<div className="w-full h-fit bg-green-500 py-12">
			<div className="grid grid-cols-2 gap-6 w-4/5 mx-auto">
				<div className="col-span-1 bg-red-500 h-[300px] w-full">
					<img className="h-full w-full" src="https://static.theceomagazine.net/wp-content/uploads/2023/04/21094311/books2.jpg" alt="" />
				</div>
				<div className="col-span-1 bg-red-500 h-[300px] w-full">
					<img className="h-full w-full" src="https://static.theceomagazine.net/wp-content/uploads/2023/04/21094311/books2.jpg" alt="" />
				</div>
				<div className="col-span-2 h-[450px] bg-red-500">
					<img className="h-full w-full" src="https://media.licdn.com/dms/image/C4E12AQHtQMCKbiSZDg/article-cover_image-shrink_600_2000/0/1609247921816?e=2147483647&v=beta&t=DQku7hgRZ_3_021FUrkc1MFDF1L_1htNpG4IuAlhjSY" alt="" />
				</div>
			</div>	
		</div>
	)
}

export default InforSection



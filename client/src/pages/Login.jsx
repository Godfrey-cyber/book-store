import React from 'react'
import { useNavigate } from "react-router-dom"
import '../App.css'

const Login = () => {
	const navigate = useNavigate()
	return (
		<section className="bg-gray-500 grid grid-cols-12 w-full h-screen">
			<div className="relative col-span-8 flex-col bg-red-400 h-full">
				<div className="overay absolute top-0 left-0 z-10 w-full h-full"></div>
				<img className="h-full w-full" src="https://static.theceomagazine.net/wp-content/uploads/2023/04/21094311/books2.jpg" alt="a_random_image_of_a_random_image" />
			</div>
			<div className="col-span-4 flex-col flex items-center justify-center bg-green-400 h-full">
				<form className="flex flex-col gap-4 mx-auto my-auto w-3/5 max-h-fit bg-white rounded-md shadow-md shadow-white p-4">
					<span className="flex">
						<p className="font-['Lemon'] text-xl font-semibold text-gray-800">Sign In here.</p>
					</span>
					<span className="input_span">
						<input onChange={""} className="input" placeholder='Enter Email' type="email"  id="" />
					</span>
					<span className="input_span">
						<input onChange={""} className="input" placeholder='Enter Password' type="text" id="" />
					</span>
					<span className="flex items-center space-x-1">
						<hr className="border border-gray-500 w-full" />
						<p className="text-sm text-gray-500">or</p>
						<hr className="border border-gray-500 w-full" />
					</span>
					<div className="flex flex-col space-y-3">
						<span className="image_span">
							<img className="form_image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABUFBMVEX////qQzU0qFNChfT7vAUufPPg6P06gfSIrfc1f/T7uQCxyPr/vQD619X7twDqPzDpKhMtpk7pNybpNCIToUAjpEjpMB3pOyz8wgDj8eYeo0VDg/vZ7N3pMiD1s6/pPDb/+/H8x0j8zmZJr2PC4cnympX0rKfrU0f4yMX3wb6ZzqXs8v72+f6Aw5AzqkBqun374eD2ubXucmn98fDzop3tZFvwiIHsWk/wgnv803f92Y3+8NL95LH94af93p38ylT+9uL+6cBWkPX+6LvH2Ptwn/ajv/nsuhHU4fxgt3W02ryUzKHrSz7veHDsWEzxkYroHQD4uHXsUTHvbyn0kB74qhHtXy7ygST4rBDwdDv7wzT81oG4zvqJtVjjuRiDqfe6tC2DrkBNqk6UsDuvszFhq0nKtibSy3hil/U9j8o6mqA2onU/jNk8lbU4n4lBieba6nVfAAAKcUlEQVR4nO2c6X/aRhrHhQwhdgAd6AgquG4B2+BisDnsJNvLTbMF2/G23W7vdu9Nt9vd///dSgIDkpnRMyPNjODD943fIX0zz8xvLkWStmzZsmXLli1bEqLfK7bODgfNKYPDs9Zxry/6pZKhdzwYDW8s1aqVy7qLbdveH71csyxVubhsnhXX17S4PzqqWWXdVjIoFFfXspTzwfHaaRYHQ9XCuQVF9ZqaGbXWxrK/f25ZOlBugV1Wj5pF0S8fTW9wpOo2qd19W9qWfnksWgFH/9DVI268UFPWrFFaW/L4PLbeTNK6OUxfn+wPlBptcT5E0a3LnmilAL2RqiemN8VWh+npkcVzNbnmW6BYRy3Raj69IRO/maP4duydq4mMLkjHC7EDa3/ErP3mjuqtwHH10GLt52GrA0F+xZsyBz8PPSOkVC+ZdsAginrJ3e+YevJJh21zHlVvVa5+HuqIo19R4duAU/QbbhO5JsceuIyi7nPx6w95DaEPsXgMOEVbRIXeo79mHv/7/IeYAIrOuDPeCRZ0UZkuOM7FdcEFDCdx/dciu+AC646VYCYdgpnMH9j0xV4y20wJoLKZh/fKmy5obbygaLF7GAn2N70P9qGHSMxhJChlNl3wIi05yErwNukNe1pYCTZros1msBJsiV9NTGEl2Nt0wQSHUWV6z8S/dGITxw8zwfMkhlHF1i3Vuri9ax7un7XO9g8Hd5dDXbXK8HkEM8HD+JM1u6zejPZXXQvqtZrDGuzSBjPB2J1QtzIj/GUg7+JNpCQzQekmVie0LaUJWar2z4b4M3J2gndxol5XL+Ev1h/YNeS/JjvBYowaLdsDwo3N1hFiBcpOMEaNlm2a7ffjo1WzJ4aCTdoa1cuHlI9sKQ+eyVCQdhxV1Dh7feFDH4aC0pCuRmsX8Xb6eq+XN51ZCraosl5RaQt0wWDRjCwFJaoW1I+SOBnq3Z+/MhUc0AwzsXrgMtMTSqaCfYoaVRI8FPKOuJgKSnfkSwrFTvIwYV9lK9gnTwo7kS64oMX2jtDn9tuEgvqQ6QslzcFe6QsyRf1c9DuT8Wwv+/RLEsV1EzwoZbPZp3+EK9rrVaKS9Hwv6yl+lQE62hei35gUX9DjTyBFJSP6hUl5f2749GuIopW+TyMi+C475+lXb0c6quLvmhPyopRdUoyMjZqoG8r0PNvLLhMRG2s3jLqUskHwsVFbu04o/W4vG1b8Bh0b69cJJemdsCAuNuxb0a9LzkG4SLGxUV6/Gl0Kw6Diytio8bmUnCwrixQRG8qR6LelYHWRImKD7SqcEQ9H0iXFUGwoaxiFkvQuxjAcG2q6PmMFghP0WIoNZc1WvVNeoLvhrBkXsWGtYy+UPohqw0VsKK9FvywVH0YJLmKjlo6PkEmJKtKpox8buuh3peIjkKEfG3ZT9MtSgUvDgOI3X1hrGRXhxS+Ob0W/Kx3fRZvN2HtO/ZCTR4w5wTwc3oSlF9SGT3KM+RT9bOBA40MtKD3Z3WEM+tkfgw33nqXYMPce8tnRM5q54SdpNnyEfDZ8KC0dpNhw9yXy2aj1/QroBTkYPkE+G+y3926aDfOPkc+Gd8MPUm2IjAvMHk2I0sepNrxCPRoeh6WP0myIDsTIBf6iSmMIcjDcRT36E/ikLd2GyMiHrp2y2XdSboiKfPCUJlZYiDR8Djb8PuWGn8U2jBOHPEYa1LRtcwx/iG34/tZQsCFq6r01XBimvR9uDaMNU56HSMONmdMgx9KNmZciDTdmbYE03Jz1IWrWtjFrfOTMe1P2aTBbwhuy17aTQ54+QQVTvl+KObjYkD1v9E7UppxbYI7XNuTsCb0jvCnnh+hd/U05A8aczHA6x2duiD5d43MXQ+QJqfQ9tBEL2R/pDXN5KsCGmFNu8Pqp8JNsVGgNX/78mAqwIuamAnSoKfxZls02rSEl7+Wghnncz0AMC4W/yC4aL7UZL6HdFxMWEuh+aeH3f/UEZafBy20KuErzr3A/Ez2rKfxTnqKNeblNuYIWKXKF7xO1zC8U/ibfY1R5yXmcgLshbiiVojK/kP3HXFDWupzkfOApil5Z+GC/t3BDYhn6wKDgDVRw5w3+h3CJWPh7QJBrI8KLFD/Q4PZqZiERaER+PfEVPO8xczYf1Dr/PiQCjVjnYucBrlHsjMYH8f3hPCQCOBMuem7cg4t0B738nbGyTJdDItiKPPRcrsBFGtUNpZVlGgiJAGaHgx5REyJ3gxc8HE1DISFgsIE34U4O8HPhMg2HBP86/QHehPmfAb8X3FNcERJBQw6hCG/BiEnpjMDcdFVIBGE/nsLXvoCs8FnarVkdEny74mfwGo1YG85ZRCIqJIKYbA3hfsAileYLDHRIBGE7tfmUoEaBRXp/KQMXEiFFhovhVwQ1ChtJPfx5DT4kQnXKbEAlyPodwKx7zrO9qJAIKzKa2zwiEsR90xXioBQZElwUT8i2xwFz0jn/0sgE2RTqyQ7JKAMfZzwqBqmhbCY+3JyQ+cHHGZ8OcSPKmpzsvs0j0hOciE22EBSNKGtmkrMbgun2jIgtqDDXJrmibCR3mPGYWBAeFTNoDGUnoc548ob4kBFzeo9g4tAoamYSxxkvc4SDDE0TSlKdfLDxMLpxB5zK2PjlLWJD4iaUpCrFYOM3Y8ze2HY0+fTfpIqA/ZmHdKi6oosp05dqQ/afevorYdoTDqQz6MrUw6nTOTbq971fk/9D0oxkWbh4HmWd+o4y+e7GRF4e3U5/gyuSTWeWoK5TD9O8Jhlzqh0n9LTT/4IvYJDMSIPEEPQcjfoEJllty8bDPmHW/wdrxhzmjlDUk2PUqYfmSrYj5nKVRkc2VheL5sBigyIp5rSpcj8o6TjjdmNlW1Ya7a5rhxnRQLGBvhMMYUw/oC5bmoYhdzvtSWPKZHLdcd0MB2c3VYyOjV2Che8qkjCcebqiptuijuP91YA/HB0bcWrUI25XjE9EbMSrUY+JeEVcbOSAm8A4YqViImBigzrrA4yFK2qniNjIwzcQsVAupJIEERvxO+EMWbyisyo2KJa9CCrC69QLmwexkYuZhAHF2HObBAjHxm4io8xcUXhmyF5sLFdqnm7Vi0R88svB2CDfXIsiFYW6iI38FfWaEK0YOU3mwSw28jvJC7qK0NkyU5xfr/KMBKVURL+3FvvlLQYlOkP8BM7j9Ddmgu40PAVDavJHlQHEL6Yc1hciq4KH1ASP8JDUBXZGzeDyrc61sEo165w+gagKSkaDz51kn66AZtQMXjfnfRrcBxxnzPMjHQ++0ci5AadUZX6DKv8GnOKdSPPA1Dh/z7lEZ8WpWNJoxrUwP5dKl7GjZnTEFOiC6pihoxb/9koSVFm1o+vH9VtcDJUO4hg3Dqb4+gzQ1hIdWDVH5v2fGkTT6CbVkJppdMXlA47KpI49lofq1QXMX8BU2rEkXb0x8IqKQCqTrhN9B2GlndZJZ3GuoNoeezctoJqa6RhmJ/2NF6I66dS9ixc4T++ChmPIXcSNm3Wg0mh3xt7VGf+OyRKO4xiOPO60G2kJ9XhUKtXGZNJuX3u0297doerattqWLVu2bNmyJX38H0BKn4PAfcwcAAAAAElFTkSuQmCC" alt="a_random_image_of_a_random_image" />
							<p className="form_text">Sign In with Google</p>
						</span>
						<span className="image_span">
							<img className="form_image" src="data:image/png;base64,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" alt="a_random_image_of_a_random_image" />
							<p className="form_text">Sign In with Facebook</p>
						</span>
						<span className="image_span">
							<img className="form_image" src="data:image/png;base64,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" alt="a_random_image_of_a_random_image" />
							<p className="form_text">Sign In with Apple</p>
						</span>
					</div>
					<button type="submit" className="bg-red-400 text-sm text-white font-semibold py-2 rounded-md w-full">Login</button>
					<div className="text-xs font-normal text-gray-700">Don't have an account? <span onClick={() => navigate('/sign_up')} className="text-red-400 hover:underline cursor-pointer">Sign Up</span></div>
				</form>
			</div>
		</section>
	)
}

export default Login
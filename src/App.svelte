<script>
	import TailwindCSS from './TailwindCSS.svelte'
	import Fa from 'svelte-fa'
	import { faUser } from '@fortawesome/free-solid-svg-icons'
	import { faLock } from '@fortawesome/free-solid-svg-icons'
	import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
</script>
<TailwindCSS />

<div class="min-h-screen flex items-center justify-center">
  <div class="max-w-md w-full space-y-12">
    <div class="flex justify-center items-center">
      <img class="transform scale-50 h-auto w-12" src="img/genuio.png" alt="logo">
      <h2 class="text-center mx-8 text-4xl font-extrabold text-gray-900">
        Genuio
      </h2>
    </div>
    <form class="mt-4 space-y-8" action="#" method="POST">
			<div class="relative mb-4">
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border-gray-300 focus:border-blue-400 outline-none text-gray-700 py-2 px-10 leading-8 transition-colors duration-200 ease-in-out" placeholder="Username: admin or user">
				<div class="absolute left-4 top-4 text-blue-400" >
				<Fa icon={faUser}/>
				</div>
      </div>
      <div class="relative mb-4">
        <input type="email" id="email" name="email" class="w-full bg-white rounded border-gray-300 focus:border-blue-400 outline-none text-gray-700 py-2 px-10 leading-8 transition-colors duration-200 ease-in-out" placeholder="Password: Genuio123">
				<div class="absolute left-4 top-4 text-blue-400">
				<Fa icon={faLock} />
				</div>
				<div class="absolute right-4 top-4 text-gray-400">
				<Fa icon={faEyeSlash}/>
				</div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue-200 ">
          <label for="remember-me" class="ml-2 text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-light text-blue-400 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button type="submit" class="w-full flex justify-center py-4 px-4 border-transparent text-sm font-medium rounded-sm text-white bg-blue-500 hover:bg-blue-600">
        	 Submit
        </button>
      </div>
    </form>
  </div>
</div>
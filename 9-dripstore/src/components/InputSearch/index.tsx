import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const InputSearch = () => {
    return (
        <div className="hidden md:flex justify-between h-[60px] rounded-lg bg-light-gray w-[559px]">
            <input className="flex-grow h-full px-5 rounded-lg bg-light-gray" type="text" placeholder="Pesquisar produto ..." />
            <a className="flex items-center h-full px-5 text-white rounded-lg cursor-pointer">
                <MagnifyingGlassIcon className="size-6 text-dark-gray"/>
            </a>
        </div>
    );
}

export default InputSearch;
import Avatar from "../Avatar";
import Input from "../Input";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-[60px] mt-5">
      <div className="pl-10 w-1/5">
        <Input onChange={() => {}} placeholder="Search something..." value="" />
      </div>
      <div className="flex items-center gap-4 pr-10">
        {/* <Avatar name="Lukasz Wojdat" /> */}
        {/* <div className="flex flex-col"> */}
          {/* <span className="font-medium text-deepNavy-500 font-bold">John Doe</span>
          <span className="text-sm font-normal text-gray-500">test.test@gmail.com</span> */}
        {/* </div> */}
          <span className="text-deepNavy-500 text-bold cursor-pointer">Sign in</span>
      </div>
    </div>
  )
}

export default Topbar;
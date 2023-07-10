import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Service() {
  return (
    <div className=" bg-white  px-[8rem]   py-[5rem] ">
      <div className="text-center  text-lg pb-6">
        <h1 className=" font-bold mb-2 uppercase text-gray-700">Services</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-10 justify-content-center items-center gap-10">
        <Card className="">
          <CardBody>
            <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              CDPAP
            </Typography>
            <Typography>
              Axzons is a lead CDPAP Agency of New York,a Consumer-Directed
              Personal Assistance Program (CDPAP) that allows families to hire
              and manage their own caregivers.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                Learn More
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="">
          <CardBody>
            <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Home Care Services
            </Typography>
            <Typography>
              Axzons expert homecare services are evidenced based and under the
              care of Physicians and Nurses so rest assured you are cared for in
              an educated environment.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                Learn More
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="">
          <CardBody>
            <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Live-in Care
            </Typography>
            <Typography>
              Axzons Homecare offers highly trained, professional Caregivers to
              assist your loved one around the clock.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                Learn More
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="">
          <CardBody>
            <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              Because  about motivating the doers. Because here to
              follow my dreams and inspire others.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                Learn More
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

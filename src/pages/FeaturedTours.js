import Card from "../components/Card"
const FeaturedTours = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl ">Our Featured Tours</h1>
            <div className="flex justify-center mt-4 lg:px-4 md:px-3 sm:px-2 px-1">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-5 sm:gap-4 gap-4">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>

                </div>
            </div>
        </div>

    )
}

export default FeaturedTours
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"


export function ProductValidatorCard() {

  const [productInfo, setProductInfo] = useState("");
  const [productLoading, setProductLoading] = useState(false);
  const[validateResult,setValidateResult]= useState("");



  const handleValidate = async()=>{
    try{
         setProductLoading(true)


        const response = await fetch(`http://localhost:8000/validate?text=${encodeURIComponent(productInfo)}`);
        const data = await response.json();
        setValidateResult(data.validation_result);

    }
    catch(error){
      console.error("Error validating product:", error);
    
    }
    finally{
      setProductLoading(false)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* product validator input card */}
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>Product Validator</CardTitle>
          <CardDescription>
            Enter your product information to validate it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
              <Label htmlFor="product">Tell us About Your Product</Label>
              <Input
                id="product"
                type="text"
                placeholder="Enter product code or name"
                className="bg-white/80"
                value={productInfo}
                onChange={(e)=> setProductInfo(e.target.value)}
                required
              />
              <Button type="button" className="w-full mt-2" onClick={handleValidate}>
                Validate
              </Button>
              {validateResult &&(
                <div  className="mt-4 p-4 bg-green-100 text-green-800 rounded">
                  <h3 className="text-lg font-semibold">Validation Result:</h3>
                  <p>{validateResult}</p>
                </div>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* product validator results card */}
      {/* <Card className="w-full max-w-md shadow-lg mt-6">
        <CardHeader>
          <CardTitle>Validation Results</CardTitle>
        </CardHeader>
      </Card> */}
    </div>
  );
}

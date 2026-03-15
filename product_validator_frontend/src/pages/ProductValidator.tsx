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
import { use, useState } from "react"
export function ProductValidatorCard() {
  const [productInfo, setProductInfo] = useState("");

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
              <Button type="submit" className="w-full mt-2">
                Validate
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* product validator results card */}
      <Card className="w-full max-w-md shadow-lg mt-6">
        <CardHeader>
          <CardTitle>Validation Results</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}

import { redirect } from "next/navigation";
export { metadata } from "../../san-pham/page";

export default function GiftsProductPage() {
  redirect("/san-pham");
}

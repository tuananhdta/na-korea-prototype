import Image from "next/image";
import Link from "next/link";

const usefulLinks = [
  {
    label: "Chính sách bảo mật thông tin cá nhân",
    href: "/chinh-sach-bao-mat",
  },
  {
    label: "Hướng dẫn mua hàng",
    href: "/huong-dan-mua-hang",
  },
  {
    label: "Chính sách đổi trả",
    href: "/chinh-sach-doi-tra",
  },
  {
    label: "Chính sách kiểm hàng",
    href: "/chinh-sach-kiem-hang",
  },
  {
    label: "Chính sách giao hàng",
    href: "/chinh-sach-giao-hang",
  },
  {
    label: "Chính sách thanh toán",
    href: "/chinh-sach-thanh-toan",
  },
] as const;

function SocialIcon({ name }: { name: "facebook" | "instagram" | "tiktok" }) {
  if (name === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M14.3 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.2H9.2V14h2.4v7h2.7Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.7" r="1" className="fill-current stroke-none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 448 512" className="h-5 w-5 fill-current">
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <ul className="flex flex-wrap justify-end gap-[10px]" aria-label="Mạng xã hội">
      <li>
        <a
          href="https://www.facebook.com/KimRedGinseng"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex h-10 w-10 items-center justify-center text-plum"
        >
          <SocialIcon name="facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/kimsredginseng.vietnam/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-10 w-10 items-center justify-center text-plum"
        >
          <SocialIcon name="instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@kimsredginsenghq"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tiktok"
          className="flex h-10 w-10 items-center justify-center text-plum"
        >
          <SocialIcon name="tiktok" />
        </a>
      </li>
    </ul>
  );
}

function ConsultationForm() {
  return (
    <form className="space-y-3" aria-label="Đăng ký nhận tư vấn">
      <input
        type="text"
        name="Ho_ten_khach_hang"
        placeholder="Họ và tên "
        aria-label="Họ và tên"
        className="h-11 w-full border border-[#eaeaea] bg-[#fafafa] px-3 text-[14px] text-[#531C42] outline-none transition-colors placeholder:text-[#777777] focus:border-[#531C42]"
      />
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center border-r border-[#eaeaea] pr-3 text-[14px] text-[#531C42]">+84</span>
        <input
          type="tel"
          name="so_dien_thoai"
          placeholder="1 (702) 123-4567"
          aria-label="Số điện thoại"
          className="h-11 w-full border border-[#eaeaea] bg-[#fafafa] pl-[58px] pr-3 text-[14px] text-[#531C42] outline-none transition-colors placeholder:text-[#777777] focus:border-[#531C42]"
        />
      </div>
      <input
        type="text"
        name="mf-text"
        placeholder="Lời nhắn "
        aria-label="Lời nhắn"
        className="h-11 w-full border border-[#eaeaea] bg-[#fafafa] px-3 text-[14px] text-[#531C42] outline-none transition-colors placeholder:text-[#777777] focus:border-[#531C42]"
      />
      <button
        type="button"
        className="inline-flex min-h-11 items-center justify-center bg-[#531C42] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#B5222A]"
      >
        Tư vấn cho tôi 
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#FBF9F9] text-[#2D2D2D]">
      <div className="mx-auto w-full max-w-[1140px] px-[10px] pt-[88px] pb-[60px]">
        <div className="grid grid-cols-1 gap-y-0 min-[768px]:grid-cols-2 min-[1025px]:grid-cols-3">
          <div className="min-w-0 px-[10px] pt-[10px] pb-[10px] min-[1025px]:pr-8">
            <a href="https://kimsredginseng.com/" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
              <Image
                src="/images/wholesale/kimsredginseng-logo-ngang-e1720490702637.png"
                alt="Kim's Red Ginseng Việt Nam"
                width={1210}
                height={309}
                className="h-auto w-full max-w-[550px] object-contain object-left"
                sizes="(min-width: 1025px) 33vw, 100vw"
              />
            </a>

            <p className="mt-5 font-sans text-[18px] font-semibold leading-7 text-[#4B193E]">
              Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác
            </p>

            <a href="http://online.gov.vn/Home/WebDetails/127493" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
              <Image
                src="/images/wholesale/logoSaleNoti.png"
                alt="Đã thông báo Bộ Công Thương"
                width={600}
                height={227}
                className="h-auto w-full max-w-[257px]"
              />
            </a>
          </div>

          <div className="min-w-0 px-[10px] pt-10 pb-[10px] min-[1025px]:pt-0">
            <h2 className="font-sans text-[20px] font-semibold leading-[35px] text-[#2D2D2D]">
              Đơn vị nhập khẩu
            </h2>
            <Image
              src="/images/wholesale/Logo-Na-Korea-01-300x87.png"
              alt="NA Korea Import & Distribution"
              width={300}
              height={87}
              className="mt-3 h-auto w-full max-w-[300px] object-contain object-left"
            />
            <div className="mt-3 text-[15px] leading-7 text-[#4B4F52]">
              <p>CÔNG TY TNHH THƯƠNG MẠI NA KOREA.</p>
              <p>GPĐKKD/MST: 0109946846 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp.</p>
              <p className="mt-2">Điện thoại liên hệ:&nbsp;<strong>090.340.9939</strong></p>
            </div>

            <h2 className="mt-8 font-sans text-[20px] font-semibold leading-[35px] text-[#2D2D2D]">
              Đăng ký nhận tư vấn
            </h2>
            <div className="mt-3">
              <ConsultationForm />
            </div>

          </div>

          <div className="min-w-0 px-[10px] pt-10 pb-[10px] min-[1025px]:pt-0">
            <h2 className="font-sans text-[20px] font-semibold leading-[35px] text-[#2D2D2D]">
              Liên kết hữu ích
            </h2>
            <ul className="mt-3">
              {usefulLinks.map((link) => (
                <li key={link.href} className="group flex items-center text-[15px] font-normal leading-10 text-[#111111]">
                  <Link href={link.href} className="flex items-center transition-colors group-hover:text-[#B5222A]">
                    <span aria-hidden="true" className="mr-2 flex h-[6px] w-[6px] shrink-0 items-center justify-center text-[#111111] transition-colors group-hover:text-[#ea5356]">
                      <svg viewBox="0 0 10 10" className="h-[6px] w-[6px] fill-none stroke-current" strokeWidth="1.5">
                        <path d="m3 2 3 3-3 3" />
                      </svg>
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-5 bg-[#FBF9F9] py-4">
        <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-4 px-[10px] text-[16px] leading-6 text-black max-[767px]:items-end min-[768px]:flex-row min-[768px]:items-end min-[768px]:justify-between">
          <p className="max-[767px]:self-start">
            ©2024. Kimsredginseng Việt Nam. All Rights Reserved.
          </p>
          <div className="flex flex-col items-end">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}

import PostCard from "@/components/PostCard";
import styles from "../index.module.scss";
import Image from "next/image";

export default function PostDetailPage() {
  return (
    <div>
      <div className={styles.PostDetailPage}>
        <h1>What is NextJS and what if we combine it with Golang?</h1>
        <p>
          Thank you for visiting! I'll be sharing my projects and thoughts here
          ^^
        </p>
        <div>
          <Image
            src="/posts/go.png"
            width={400}
            height={400}
            alt="image"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDs6KKKAEPSoXqVjUDmgCGSqz1NIarO1AEbGoyaVmqMtQBIDUimq4apUagC0hqdKqo1WEagC0lSrVdDUymgCWikBpaACiiigAppamF6Yz0AK7VA7UrvVeR6AGyNVaR6WR6qySUADvUZeoXlqEze9AFwSVKj1nCb3qZJaANNHqwj1mxyVajkoA0EaplaqSPU6PQBbVqeGqsr08PQBNuoqLfRQBCXpjPUJemM9AD3eq8klI71WkkoASWSqUstLNLWZdXIQEk0ASzXAHeqUl8oP3qz5rhpT1wKhoA1Uv1J+9VyG5B71z1SRzPGflPHpQB1cU2e9XIpa5y0vA4681qwzZ70AbEclWEesyKSrSSUAX1enh6qK9PD0AWd9FV99FAEJeo2emk0xjQAjvVSV6lkaqczUAVbmXANYdzMZXIzwKv38hVDWTQAUUUUAFFFFADkcowZetbNncb1BrEq1YyFZNvrQB0sMlXI3rKt24FX42oAvK9SBqrIakBoAm3UVHmigBppjVMVpjLQBUkFU5h1rQkWqkyUAYOog7DWbW5eQ7lIrEZSrFT1FACUUUUAFFFFABU9oMzCoK0bCA/eI5NAGnbjgVfiFVoE6VdjWgCVKlFIi1IFoAbRT9tFAE5SmMlWylMZKAKLpVWWOtJ0qvJHQBjTxZzWNe2pPzKORXTSxVQnhz2oA5gjBwaStS5sgxyODVFraRT0zQBDRUy20jdsVbt7HBBbk0AQWtqZGDMOK27eDAHFEFuBjir8UVABFHVuNKI46solADVSpAlSKlSBKAINlFWNlFAFkpTWSrO2mstAFJ0qvIlX3WoHSgDNkjqnLFWrIlVZEoAyZIfaq7W49K1XjqEx0AUFtx6VYjh9qsCOpUjoAZHFVuOOljjqzGlACIlWESlRKmVaAGqlPCVIq08LQBDsoqfbRQBLSEZpaKAInWq7rVthUDigCnItVpFq5IKruKAKbrURSrLCoyKAIwlSotAFSKKAHotWEWo0FWEFAEiLUyrTEFTKKAFC0/FApaAExRS0UAFFFFACN0qB6KKAK0lV3oooArtTDRRQACpVoooAmSrCUUUATpUy0UUASUUUUAFFFFAH/9k="
          />
        </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna eros, sagittis eu malesuada at, finibus quis ligula. 
            Ut ultricies, sapien quis hendrerit sollicitudin, mauris urna hendrerit ante, vitae tempor enim dui id odio. Donec ultrices metus dui,
            et aliquam velit gravida et. Sed pharetra egestas purus nec luctus. Fusce egestas rutrum dui non eleifend. Quisque sollicitudin finibus
            tincidunt. Fusce vulputate tortor eu augue pellentesque suscipit. Etiam tristique, nisl quis consectetur consectetur, turpis lacus
            consequat mauris, sit amet luctus lectus sem vitae sem. Curabitur massa felis, vulputate eget venenatis ut, tempus ac sem. Nam condimentum
            ut ex sit amet egestas. Curabitur interdum, elit ut tempor blandit, ex turpis euismod lectus, sit amet tempor leo elit sit amet lectus.
            Nullam eu ipsum quis mauris laoreet imperdiet ac vitae elit. Vestibulum ac est ac justo imperdiet rhoncus a id tellus.
            </p>
      </div>
      
    </div>
  );
}

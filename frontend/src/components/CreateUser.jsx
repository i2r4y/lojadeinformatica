import logoC from "../assets/logoC.png";

export default function CreateUser() {
  return (
    <div className="flex gap-5 flex-col">
      <div className="flex justify-center py-4 bg-black items-center">
        <p className="text-[#D99455] text-5xl text-center">CRIAR UMA CONTA</p>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-[15%] " src={logoC} alt="" />
      </div>
      <div className="flex justify-center items-center w-2/5 m-auto flex-col gap-5">
        <div className="flex flex-col w-full gap-1">
          <p className="text-2xl">Nome</p>
          <input className="border p-2" type="text" placeholder="E-mail" />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-2xl">E-mail</p>
          <input className="border p-2" type="password" placeholder="Senha" />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-2xl">Senha</p>
          <input className="border p-2" type="text" placeholder="E-mail" />
        </div>
      </div>
      <div className="flex justify-center w-2/5 m-auto flex-col">
        <p className="text-end">Esqueceu a Senha?</p>
      </div>
      <div>
        <button className="bg-[#8A1F1F] text-[#D99455] text-2xl w-fit m-auto py-2 px-14 flex justify-center">
          Criar Conta
        </button>
      </div>
    </div>
  );
}

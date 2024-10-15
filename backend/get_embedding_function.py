from langchain_community.embeddings.ollama import OllamaEmbeddings
# from langchain_community.embeddings.bedrock import BedrockEmbeddings


def get_embedding_function():
    # embeddings = BedrockEmbeddings(
    #     credentials_profile_name="default", region_name="us-east-1"
    # )
    
    # https://ollama.com/library/nomic-embed-text
    # 636.4k
    # embeddings = OllamaEmbeddings(model="nomic-embed-text")
    # https://ollama.com/quentinz/bge-large-zh-v1.5
    # 4487
    # embeddings = OllamaEmbeddings(model="quentinz/bge-large-zh-v1.5")
    # embeddings = OllamaEmbeddings(model="shaw/dmeta-embedding-zh")
    # https://ollama.com/library/bge-m3
    embeddings = OllamaEmbeddings(model="bge-m3")
    return embeddings
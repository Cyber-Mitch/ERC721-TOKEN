// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract Reentrancy is ERC721URIStorage, Ownable{
    

    constructor() ERC721("Reentrancy", "REN") {}

    function safeMint(address to, string memory uri,  uint256 tokenId) public onlyOwner{

                
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    


}
module.exports = function createDreamTeam(members) {
  let arr=[];
  if(!Array.isArray(members)) {return false;}
  for (let i=0;i<members.length;i++)
  {
    if (typeof(members[i])=="string")
    {
      members[i].toUpperCase().split('');
      arr.push(members[i][0]);
    }
  }
  if (arr.length != 0) {return arr.sort().join('');}
  return false;
};
